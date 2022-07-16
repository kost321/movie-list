export const getPostsFromServer = async () => {
  const response = await fetch("http://localhost:4000/movies");
  const responseInJson = await response.json();
  const posts = responseInJson.data;
  return posts;
};

export const getPostsFromServerFilter = async (filter) => {
  const response = await fetch(`http://localhost:4000/movies?filter=${filter}`);
  const responseInJson = await response.json();
  const posts = responseInJson.data;
  return posts;
};

export const getPostsFromServerSort = async (typeOrder, currentFilter) => {
  if (typeOrder === "asc") {
    const response = await fetch(
      `http://localhost:4000/movies?sortBy=release_date&sortOrder=${typeOrder}&filter=${currentFilter}`
    );
    const responseInJson = await response.json();
    const posts = responseInJson.data;
    return posts;
  } else {
    const response = await fetch(
      `http://localhost:4000/movies?sortBy=release_date&sortOrder=${typeOrder}&filter=${currentFilter}`
    );
    const responseInJson = await response.json();
    const posts = responseInJson.data;
    return posts;
  }
};
