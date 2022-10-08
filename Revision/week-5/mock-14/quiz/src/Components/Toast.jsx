import { useToast } from "@chakra-ui/react";

function Toast({ status }) {
  const toast = useToast();

  return (
    <Wrap>
      <Button
        onClick={() =>
          toast({
            title: `${status} toast`,
            status: status,
            isClosable: true,
          })
        }
      >
        Show {status} toast
      </Button>
    </Wrap>
  );
}

export default Toast;
