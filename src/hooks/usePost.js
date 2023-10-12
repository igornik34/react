import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    function getSortedPosts() {
        console.log("vbfjkdsbvfhjds");
        if (sort) {
          return [...posts].sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        }
        return posts;
      }
    
      const sortedPosts = useMemo(getSortedPosts, [sort, posts]);
      return sortedPosts
}

export const usePosts = (posts, sort, search) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((el) =>
          el.title.toLowerCase().includes(search.toLowerCase())
        );
      }, [search, sortedPosts]);

      return sortedAndSearchedPosts
}