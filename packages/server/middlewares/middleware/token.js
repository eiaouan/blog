

module.exports= async (ctx, next) => {
    return next().catch((err) => {
      if (err.status === 401) {
        ctx.body = new UnauthorizedModel()
      } else {
        throw err
      }
    })
  }
  