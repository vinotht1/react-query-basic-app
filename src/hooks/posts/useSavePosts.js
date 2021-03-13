import { useMutation, useQueryClient } from "react-query";
import API from "../../api";
export default function useSavePosts() {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (values) => await API.post("PostPosts", values)
  );
  if (mutation.isSuccess) {
    queryClient.refetchQueries(["allPosts"]);
  }
  return mutation;
}
