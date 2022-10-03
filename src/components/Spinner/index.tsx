import { MoonLoader } from "react-spinners";

import { SpinnerContainer } from "./styles";

function Spinner() {
  return (
    <SpinnerContainer>
      <MoonLoader color="#36d7b7" />
    </SpinnerContainer>
  );
}

export { Spinner };
