const getPages = (totalPages, limit) => {
  return Math.ceil(totalPages / limit);
};



export default getPages