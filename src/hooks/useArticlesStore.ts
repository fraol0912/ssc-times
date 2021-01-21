import makeStore from "../store";

export interface Article {
  id: string;
  html: string;
  tag: string;
  author: string;
  date: string;
  description: string;
  title: string;
  authorPic: string;
  image: string;
  imageAlt: string;
  slug: string;
}

interface ArticlesState {
  articles: Article[];
}

interface ArticlesAction {
  type: "ADD_ARTICLES";
  payload: Article[];
}

const reducer: (
  state: ArticlesState,
  action: ArticlesAction
) => ArticlesState = (
  state: ArticlesState,
  action: ArticlesAction
): ArticlesState => {
  switch (action.type) {
    case "ADD_ARTICLES":
      return {
        articles: action.payload,
      };
  }
};

const initialState: ArticlesState = {
  articles: [],
};

const [ArticlesProvider, useArticlesDispatch, useArticlesStore] = makeStore<
  ArticlesState,
  ArticlesAction
>("articles", reducer, initialState);

export { ArticlesProvider, useArticlesDispatch, useArticlesStore };
