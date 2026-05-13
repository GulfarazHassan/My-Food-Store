/**
 * @openapi
 * /api/v1/test/test-user:
 *   get:
 *     tags: [Test]
 *     summary: Test route
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiEnvelope'
 */

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userName, email, password, phone, address, answer]
 *             properties:
 *               userName: { type: string }
 *               email: { type: string, format: email }
 *               password: { type: string, format: password }
 *               phone: { type: string }
 *               address: { type: string }
 *               answer: { type: string, description: Security answer (used for password reset) }
 *     responses:
 *       201:
 *         description: Registered
 *       500:
 *         description: Validation or server error
 */

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login and receive a JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string, format: email }
 *               password: { type: string, format: password }
 *     responses:
 *       200:
 *         description: Login success; use token as Bearer in protected routes
 *       404:
 *         description: User not found
 *       500:
 *         description: Invalid credentials or server error
 */

/**
 * @openapi
 * /api/v1/user/getUser:
 *   get:
 *     tags: [User]
 *     summary: Get current user profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */

/**
 * @openapi
 * /api/v1/user/updateUser:
 *   put:
 *     tags: [User]
 *     summary: Update profile fields
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName: { type: string }
 *               address: { type: string }
 *               phone: { type: string }
 *     responses:
 *       200:
 *         description: Updated
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/user/updatePassword:
 *   post:
 *     tags: [User]
 *     summary: Change password (authenticated)
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [oldPassword, newPassword]
 *             properties:
 *               oldPassword: { type: string }
 *               newPassword: { type: string }
 *     responses:
 *       200:
 *         description: Password updated
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/user/resetPassword:
 *   post:
 *     tags: [User]
 *     summary: Reset password using email and security answer
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, newPassword, answer]
 *             properties:
 *               email: { type: string, format: email }
 *               newPassword: { type: string }
 *               answer: { type: string }
 *     responses:
 *       200:
 *         description: Reset successful
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/user/deleteUser/{id}:
 *   delete:
 *     tags: [User]
 *     summary: Delete user account by id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Deleted
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/resturant/create:
 *   post:
 *     tags: [Restaurant]
 *     summary: Create restaurant
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, coords]
 *             properties:
 *               title: { type: string }
 *               imageUrl: { type: string }
 *               foods: { type: array, items: { type: string } }
 *               time: { type: string }
 *               pickup: { type: boolean }
 *               delivery: { type: boolean }
 *               isOpen: { type: boolean }
 *               logoUrl: { type: string }
 *               rating: { type: number }
 *               ratingCount: { type: number }
 *               code: { type: string }
 *               coords: { type: object, additionalProperties: true }
 *     responses:
 *       201:
 *         description: Created
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/resturant/getAll:
 *   get:
 *     tags: [Restaurant]
 *     summary: List all restaurants
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @openapi
 * /api/v1/resturant/get/{id}:
 *   get:
 *     tags: [Restaurant]
 *     summary: Get restaurant by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 */

/**
 * @openapi
 * /api/v1/resturant/delete/{id}:
 *   delete:
 *     tags: [Restaurant]
 *     summary: Delete restaurant
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Deleted
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/category/create:
 *   post:
 *     tags: [Category]
 *     summary: Create category
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title]
 *             properties:
 *               title: { type: string }
 *               imageUrl: { type: string }
 *     responses:
 *       201:
 *         description: Created
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/category/getAll:
 *   get:
 *     tags: [Category]
 *     summary: List categories
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @openapi
 * /api/v1/category/update/{id}:
 *   put:
 *     tags: [Category]
 *     summary: Update category
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               imageUrl: { type: string }
 *     responses:
 *       200:
 *         description: Updated
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/category/delete/{id}:
 *   delete:
 *     tags: [Category]
 *     summary: Delete category
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Deleted
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/food/create:
 *   post:
 *     tags: [Food]
 *     summary: Create food item
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description, price, resturnat]
 *             properties:
 *               title: { type: string }
 *               description: { type: string }
 *               price: { type: number }
 *               imageUrl: { type: string }
 *               foodTags: { type: array, items: { type: string } }
 *               catgeory: { type: string }
 *               code: { type: string }
 *               isAvailabe: { type: boolean }
 *               resturnat: { type: string, description: Restaurant id (field name matches backend) }
 *               rating: { type: number }
 *     responses:
 *       201:
 *         description: Created
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/food/getAll:
 *   get:
 *     tags: [Food]
 *     summary: List all foods
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @openapi
 * /api/v1/food/get/{id}:
 *   get:
 *     tags: [Food]
 *     summary: Get food by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 */

/**
 * @openapi
 * /api/v1/food/getByResturant/{id}:
 *   get:
 *     tags: [Food]
 *     summary: List foods by restaurant id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @openapi
 * /api/v1/food/update/{id}:
 *   put:
 *     tags: [Food]
 *     summary: Update food item
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               description: { type: string }
 *               price: { type: number }
 *               imageUrl: { type: string }
 *               foodTags: { type: array, items: { type: string } }
 *               catgeory: { type: string }
 *               code: { type: string }
 *               isAvailabe: { type: boolean }
 *               resturnat: { type: string }
 *               rating: { type: number }
 *     responses:
 *       200:
 *         description: Updated
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/food/delete/{id}:
 *   delete:
 *     tags: [Food]
 *     summary: Delete food item
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Deleted
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/food/placeorder:
 *   post:
 *     tags: [Food]
 *     summary: Place order (cart items)
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [cart]
 *             properties:
 *               cart:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     price: { type: number }
 *                   additionalProperties: true
 *     responses:
 *       201:
 *         description: Order placed
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/food/orderStatus/{id}:
 *   post:
 *     tags: [Food]
 *     summary: Update order status (admin)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status: { type: string }
 *     responses:
 *       200:
 *         description: Status updated
 *       401:
 *         description: Unauthorized
 */

// This file exists only for swagger-jsdoc to scan; no runtime exports required.
module.exports = {};
