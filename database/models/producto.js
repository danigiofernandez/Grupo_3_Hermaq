module.exports = (sequelize, dataTypes) => {
   
    //defino las variables alias y cols para armar los datos que lleva la tabla product   
    
    let alias = 'Productos';
        let cols = {
            product_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrements: true,
            },
            product_name:{
                type: dataTypes.STRING
            },
            product_price: {type: dataTypes.DECIMAL(10,2),

            },
            product_brand_id: {
                type: data.Types.INTEGER,
            },
            product_user_id: {
                type: dataTypes.INTEGER,
            },
        };

        let config = {
            tableNames: 'product',
            timestamps: false
        };


    const Producto = sequelize.define(alias, cols, config);

    // Relaciones de SQL == Asociaciones en sequelize

    Productos.associate = function(models) {

        Productos.belongsToMany(
            models.Marcas, 
            {
                through: 'product_brand_id',
                foreignKey: 'brand_id',
                as: 'brand',
                timestamps: false

            }
        );

    }

    return Producto;
}