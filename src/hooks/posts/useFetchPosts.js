import { useQuery } from "react-query";
import API from "../../api";

export default function useFetchPosts() {
  return useQuery(["allPosts"], async () => await API.get("GetPosts"));
}
