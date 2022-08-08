import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'; 
import Routes from "./routes";


function App() {
  return (
    <>
      <Routes/>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
