import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormFields from './FormField'

type FormType = 'login' | 'cadastro'

const loginSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string().min(8, { message: 'A senha é obrigatória' }),
})

const cadastroSchema = loginSchema
  .extend({
    confirmPassword: z
      .string()
      .min(8, { message: 'A confirmação é obrigatória' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

const AuthForm = ({ type }: { type: FormType }) => {
  const isLogin = type === 'login'
  const formSchema = isLogin ? loginSchema : cadastroSchema

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      ...(type === 'cadastro' && { confirmPassword: '' }),
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(`${type.toUpperCase()} =>`, values)
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8 lg:mt-[72px] px-6">
      <div className="w-full max-w-md flex flex-col items-start">
        <div className="flex flex-col gap-2">
          <h2 className="text-primary-brand text-2xl font-semibold">
            {isLogin ? 'Faça o login' : 'Crie sua conta'}
          </h2>
          <p className="text-xs font-normal mt-2 mb-6">
            {isLogin ? (
              <>
                Não possui uma conta?{' '}
                <Link
                  to="/cadastro"
                  className="text-primary-brand hover:underline font-bold"
                >
                  Cadastre-se agora
                </Link>
              </>
            ) : (
              <>
                Já possui uma conta?{' '}
                <Link
                  to="/login"
                  className="text-primary-brand hover:underline font-bold"
                >
                  Faça login
                </Link>
              </>
            )}
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full flex flex-col items-start"
          >
            <FormFields
              name="email"
              control={form.control}
              label="E-mail"
              placeholder="seuemail@gmail.com"
            />
            <FormFields
              name="password"
              control={form.control}
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
            />

            {!isLogin && (
              <FormFields
                name="confirmPassword"
                control={form.control}
                label="Confirme sua senha"
                placeholder="Digite a senha novamente"
                type="password"
              />
            )}

            {isLogin && (
              <Link
                to="/passwordrecover"
                className="text-xs font-normal mt-2 text-left hover:underline"
              >
                Esqueceu sua senha?
              </Link>
            )}
            <div className="flex flex-col w-full mt-8">
              <Button
                type="submit"
                className="w-full bg-primary-brand font-medium leading-[150%] tracking-[1.724px] uppercase hover:bg-primary-brand/22 hover:border-primary-brand hover:border hover:text-primary-brand cursor-pointer"
              >
                {isLogin ? 'ENTRAR' : 'CRIAR CONTA'}
              </Button>

              {isLogin && (
                <Link
                  to="/nologin"
                  className="text-center mt-10 text-xs font-bold text-primary-brand hover:underline"
                >
                  CONTINUAR SEM LOGIN
                </Link>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AuthForm
