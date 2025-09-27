import { Container } from "@mantine/core";
import { ViewHome } from "./views/home/ViewHome";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Container mt="xl">
      <ViewHome />
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
}

export default App;
