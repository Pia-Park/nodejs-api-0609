const router = require('express').Router()
const employeeService = require('../service/employeesData')

//get employees 
router.get('/', (req, res) => res.json(employeeService.getAll()))

//get employees:id 
router.get('/:id', (req, res) => {
    const employeeId = req.params.id
    return res.json(employeeService.getById(employeeId))
})

//post employees
router.post('/', (req, res) => {
    const newEmployee = req.body
    return res.json(employeeService.save(newEmployee))
})

//delete employees:id 
router.delete('/:id', (req, res) => {
    const employeeId = req.params.id
    return res.json(employeeService.deleteById(employeeId))
})

module.exports = router