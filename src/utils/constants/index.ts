export const routes = {
  home: '/',
  profile: '/profile',
  article: (postId: string) => `/post/${postId}`
};
