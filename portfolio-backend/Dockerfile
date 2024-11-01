# Use official Python image as base
FROM python:3.10

# Set working directory
WORKDIR /app

# Copy requirements and install
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy all files into the container
COPY . /app

# Run the FastAPI server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
