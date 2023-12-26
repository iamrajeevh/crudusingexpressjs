const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/
const model = require('./index')
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
      user_name: {
        type: DataTypes.STRING,
      },
      user_email: {
          type: DataTypes.STRING,
      },
      user_mobile: {
          type: DataTypes.STRING,
          // validate: {
          //   validateMobile: function (value) {
          //     if (
          //       !/^(13|14|15|17|18)\d{9}$/i.test(value) &&
          //       !/^((\(\d{2,3}\))|(\d{3}\-)|(\d{3}))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(
          //         value
          //       )
          //     ) {
          //       throw new Error("mobile format error!");
          //     }
          //   },
          // },
    }
    })

    // User.associate = function (model) {
    //     User.hasOne(model.user_roles, {
    //         foreignKey: 'userId',
    //         as: 'userRole',
    //     })

    //     User.belongsTo(model.department, {
    //         foreignKey: 'departmentId',
    //         as: 'department',
    //     })

    //     User.belongsTo(model.company, {
    //         foreignKey: 'companyId',
    //         as: 'company',
    //     })
    // }

    // to delete user some key from return model
    User.prototype.toJSON = function () {
        var values = Object.assign({}, this.get())
        delete values.userKey
        return values
    }

    return User
}
