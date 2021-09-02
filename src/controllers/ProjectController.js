
const knex = require('../database');

module.exports ={
    async index(req,res,next){

    try{
      const  {user_id, page = 1} = req.query
      

      const CountObj = knex('projects').count()

      const query = knex('projects').limit(5).offset((page - 1) * 5)

      if(user_id){
          query
              .where({user_id})
              .join('users','users.id', '=' , 'projects.user_id')
              .select("projects.*","users.username")
              .where('users.deleted_at',null)

              CountObj.where({user_id})
          }

          const [count] = await CountObj

          res.header('X-Total-count',count["count"])

          const results = await query

          return res.json(results)
      }catch(err){
        next(err)

        }
      
    },

    async create(req,res,next){
      const {title,value,user_id,created_at,} = req.body

      results = await knex("projects")
        .insert(
          {
            title,  
            value,
            user_id,
            created_at: "2021-08-08T03:35:37.575Z"
          }
        )

        return res.json({message:'projeto criado com sucesso'})
    },

    async editOrder(req,res,next){
      const {id} = req.params

      const project = await knex('projects')
        .where("id", id)

      return res.json(project)


    },

    async updateOrder(req,res,next){
      const {id} = req.params
      const {status, description,project_id} = req.body

      const order = await knex('orders')
        .where("orders.id","=", id)

        if(order.id != order){
          console.log(order)
          return res.json({message:true})
        }else{
          return res.json(order)
        }

        console.log(order)

        // if(order) {
        //   await knex('orders').update({
        //     status,
        //     description,
        //   }).where(id)
        //   return res.json(order)
        
        // }else{
        //   await knex('orders').insert({
        //     status,
        //     description,
        //     project_id: id
        //   })

    },

    async greaterFifty(req,res,next){
    
      var start = new Date();
      start.setHours(0,0,0,0);

      results = await knex("projects")
      .where("created_at", ">=",start)
      .andWhere("value", ">=", "50")

        return res.json(results)

    }


}
