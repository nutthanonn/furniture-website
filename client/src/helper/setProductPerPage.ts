// backend query เองแต่อันนี้เทส

interface productDataType {
  id: number;
  image: string;
  price: number;
  name: string;
  detail: string;
  category: string;
}

export const SetProductPerPage = (
  n: number,
  data: Array<productDataType>
): Array<productDataType> => {
  const indexOfLastPost = 9 * n;
  const indexOfFirstPost = indexOfLastPost - 9;

  return data.slice(indexOfFirstPost, indexOfLastPost);
};
