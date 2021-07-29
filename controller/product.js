import Product from '../model/product'

export const list = (req,res) =>{
    Product.find((err,data)=>{
        if(err){
            res.status(400).json({
                error: 'không tìm thấy sản phẩm nào'
            })
        }
        res.json(data)
    })
}
export const add = (req,res) =>{
    const product = new Product(req.body)
    product.save((err,data)=>{
        if(err){
            res.status(400).json({
                error:'thêm không thành công'
            })
        }
        res.json(data)
    })
}

export const productById = (req,res,next,id)=>{
    Product.findById(id).exec((err,product)=>{
        if(err|| !product){
            res.status(400).json({
                error:"không tìm thấy sản phẩm"
            })
        }
        req.product = product;
        next();
    })
}

export const remove = (req,res)=>{
    let product = req.product;
    product.remove((err,deleteProduct)=>{
        if(err){
            re
        }
    })
}

export const read = (req,res) =>{
    return res.json(req.product);
}