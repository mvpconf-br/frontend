import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8 lg:mt-[72px] lg:max-w-[472px]">
        <Outlet />
      </div>
    </>
  )
}

export default AuthLayout
