const express = require('express');
const mongoose = require('mongoose');
const controllers = require('../controller/port.controller');

const router = express.Router();

router
.get('/read_portafolio', controllers.readPortafolio)
.post('/insert', controllers.insertPortafolioData)
.put('/update/:id', controllers.updateportafolio)



//get

/**
 * @swagger
 * /api/v1/read_portafolio:
 *  get:
 *     summary: Get all user
 *     tags: [read_portafolio]
 *     responses:
 *       200:
 *         description: Success
 *         
 */








//post

/**
 * @openapi
 * '/api/v1/insert':
 *  post:
 *     tags:
 *     - Hero
 *     summary: Create a hero
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *            properties:
 *              id:
 *                type: number
 *                default: 2
 *              name:
 *                type: string
 *                default: string
 *              userName:
 *                type: string
 *                default: string
 *              email:
 *                type: string
 *                default: string
 *              adress:
 *                type: object
 *                properties:
 *                  street:
 *                    type: string
 *                    default: string
 *                  suit:
 *                    type: string
 *                    default: string
 *                  city:
 *                      type: string
 *                      default: string
 *                  zipcode:
 *                      type: string
 *                      default: string
 *              geo:
 *                  type: object
 *                  properties:
 *                      last:
 *                        type: string
 *                        default: string
 *                      ing:
 *                         type: string
 *                         default: string
 *              phone:
 *                  type: string
 *              website:
 *                  type: string
 *              company:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                      catchPhrases:
 *                          type: string
 *                      bs:
 *                          type: string
 *               
 *              
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */






//put

/**
 * @swagger
 * /api/v1/update/:id:
 *  put:
 *     summary: Get all user
 *     tags: [read_portafolio]
 *     responses:
 *       200:
 *         description: Success
 *         
 */

module.exports = router;