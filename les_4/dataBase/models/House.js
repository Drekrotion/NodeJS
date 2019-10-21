module.exports = (sequelize, DataTypes) => {

    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        square: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }


    }, {
        tableName: 'house',
        timestamps: false
    });

    return House;

};