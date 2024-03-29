# Image Upload API

This API allows you to upload images, save them to a MongoDB database, and retrieve the saved images.

## Endpoints

### 1. Upload Image

Upload an image to the server.

**Request:**
- Method: POST
- URL: http://localhost:5000/upload
- Body: Form-data with key 'image' containing the image file.

**Response:**
- 200 OK: Image uploaded successfully.
  - Message: 'Image uploaded successfully'
  - imageUrl: Secure URL to access the uploaded image.

- 400 Bad Request: No image provided.
  - Error: 'No image provided'

- 400 Bad Request: Invalid image format.
  - Error: 'Invalid image format. Please upload a JPEG, PNG, or GIF file.'

- 500 Internal Server Error: Server encountered an error.
  - Error: 'Internal server error'

### 2. Get Image by ID

Get the saved image by its ID.

**Request:**
- Method: GET
- URL: http://localhost:5000/get_image/:id

**Response:**
- 200 OK: Image found.
  - Image data

- 404 Not Found: Image not found.
  - Error: 'Image not found'

- 500 Internal Server Error: Server encountered an error.
  - Error: 'Internal server error'
