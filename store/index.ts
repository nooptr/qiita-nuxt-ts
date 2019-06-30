
import { MutationTree, ActionTree } from "vuex"
import Vue from "vue"

const baseUrl = "https://qiita.com/api/v2"

export interface User {
  created: string
  created_time: number
  id: string
  karma: number
}

export interface Items {
  [key: number]: Item
}
export interface Item {
  body: string,
  id: number
  title: string
  url: string
  user: {}
}

export interface IRootState {
  items: Items
}

// =================================================
// State
// =================================================
const s = (): IRootState => {
  const state = {
    items: {
      /* [id: number]: Item */
    }
  }

  return state
}

// =================================================
// Mutations
// =================================================
const mutations: MutationTree<IRootState> = {
  SET_ITEMS: (state, { items }: { items: Item[] }) => {
    state.items = items
  }
}

// =================================================
// Actions
// =================================================
const actions: ActionTree<IRootState, any> = {
  FETCH_FEED({ commit, state }, { page }) {
    (this as any).$axios.$get(`${baseUrl}/items?query=tag:nuxt.js&page=${page}`).then((items) => {
      commit("SET_ITEMS", { items })
    })
  }
}

export { s as state, actions, mutations }
