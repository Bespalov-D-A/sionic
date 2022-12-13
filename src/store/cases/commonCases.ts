export const addPackDataCase = (payload: any[], Model: any) => {
        for (let i = 0; i < payload.length; i++) {
          //@ts-ignore
          if(!Model.filter({id: payload[i].id}).exists())
          //@ts-ignore
          Model.create(payload[i]);
        }

}

export const removeAllProductsCase = (Model: any) => {
        Model.delete()
}
