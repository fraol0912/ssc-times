import makeStore from "../store";

export interface ArticlePage {
  html: string;
  tag: string;
  author: string;
  date: string;
  title: string;
  authorPic: string;
  image: string;
  imageAlt: string;
}

export interface Article {
  description: string;
  imageAlt: string;
  image: string;
  title: string;
  slug: string;
  tag: string;
  id: string;
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
