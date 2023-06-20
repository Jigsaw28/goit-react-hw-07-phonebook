export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.isEmpty = true
  state.error = '';
  state.items = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.items.push(payload);
};
export const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.items = state.items.filter(item => item.id !== payload.id);
};