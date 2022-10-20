import MainNavigation from './Main-Navigation';

function layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
export default layout;
