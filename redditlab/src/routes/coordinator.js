export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.replace("/signup");
};

export const goToFeed = (history) => {
  history.replace("/");
};

export const goToCreatePostPage = (history) => {
  history.replace("/createpost");
};

export const goToPostPage = (history, id) => {
  history.push(`/post/${id}`);
};

export const goToPreviousPage = (history) => {
  history.goBack();
};
