import { Route, Routes } from "react-router-dom";
import { UserContext, UserContextWrapper } from "./components/context";
import { Home } from "./components/home";
import { CreateAccount } from "./components/createaccount";
import { Deposit } from "./components/deposit";
import { Withdraw } from "./components/withdraw";
import { AllData } from "./components/alldata";
import { NavBar } from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Transactions from "./components/Transactions";

function App() {
  return (
    <UserContextWrapper>
      <NavBar />
      <Container className="pt-5">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="CreateAccount" element={<CreateAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/AllData" element={<AllData />} />
          <Route path="/transactions/:id" element={<Transactions />} />
        </Routes>
      </Container>
    </UserContextWrapper>
  );
}

export default App;
