import canSSRGuest from "@/utils/functions/canSSRGuests";
import { Box } from "@chakra-ui/react";

export default function Agendamento() {
  return <Box></Box>;
}

export const getServerSideProps = canSSRGuest(async (context) => {
  try {
    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
});
