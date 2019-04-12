var fs = require('fs')

var dbPath = './db.json'

/**
 * 获取学生列表
 * @param  {Function} callback 回调函数
 */
exports.find = function (callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
      if (err) {
        return callback(err)
      }
      var students = JSON.parse(data).students
  
      // 添加 id ，唯一不重复
      student.id = students[students.length - 1].id + 1
  
      // 把用户传递的对象保存到数组中
      students.push(student)
  
      // 把对象数据转换为字符串
      var fileData = JSON.stringify({
        students: students
      })
  
      // 把字符串保存到文件中
      fs.writeFile(dbPath, fileData, function (err) {
        if (err) {
          // 错误就是把错误对象传递给它
          return callback(err)
        }
        // 成功就没错，所以错误对象是 null
        callback(null)
      })
    })
  }