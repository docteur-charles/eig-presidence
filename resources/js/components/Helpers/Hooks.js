import { useLocation } from "react-router-dom";


export function useIterable(iterable) {
  let params = {};
  for (let d of iterable.keys()) {
    params[d] = iterable.get(d);
  }
  return params;
}

export function useQuery() {
  let q = new URLSearchParams(useLocation().search);
  return useIterable(q);
}