# InTrivia: AI-Driven Interview Training Platform

**InTrivia** is an AI-powered interview training platform designed to help individuals enhance their interview skills. By simulating real-life interview scenarios and leveraging artificial intelligence, InTrivia provides personalized feedback and guidance to improve performance.

---

## 📌 **Project Vision**
### **Problem Statement**
Many people lack access to platforms that adequately prepare them for interviews and help them secure their dream jobs. InTrivia bridges this gap by offering a robust training system to prepare candidates for interviews and enable them to perform at their best.

### **Business Opportunity**
- **Subscription Model**: A free version allows limited training sessions, with the option to unlock more sessions through paid subscriptions.  
- **Corporate Use**: Organizations can automate initial-level tests for recruitment.

### **Objectives**
- Deliver a mock interview platform that evaluates and reports performance.
- Provide a detailed session report highlighting improvement areas to enhance skills for future attempts.

---

## 🛠️ **Project Scope**
- **Development Duration**: 8 months  
- **Technology Stack**: MERN (MongoDB, Express.js, React, Node.js)  
- **Key Features**: NLP-based semantic analysis for scoring, topic modeling for question generation, and report generation for improvement tracking.

---

## 🚀 **Features**
1. Voice-to-text and text-to-voice capabilities.  
2. Non-repeating questions.  
3. Scoring for subjective answers using NLP.  
4. Detailed session reports with improvement areas.  
5. Certificate generation upon completion.

---

## ✅ **Functional Requirements**
- **User Actions**:  
  - Create and log in to accounts.  
  - Start and submit tests.  
  - Answer questions via typing or speech.  
  - View and download detailed reports and certificates.  

- **Admin Actions**:  
  - Manage users and questions.  
  - Ensure platform maintenance and updates.  

---

## 🎯 **Quality Attributes**
- **Maintainability**: Easy updates and scalable architecture.  
- **Efficiency**: Smooth performance under load.  
- **Reliability**: Accurate feedback with minimal errors.  

---

## ⚙️ **System Requirements**
### **Hardware**  
- Compatible computer/server with sufficient storage.

### **Software**  
- Supported OS: Windows, macOS, Linux.  
- Browser: Modern browsers like Chrome, Firefox, Edge.

---

## 🏗️ **Architecture Design**
The application architecture integrates the frontend, backend, and NLP-based AI analysis through a seamless data flow.

---

## 📝 **Installation & Setup**
### **Backend Setup**
1. Clone the repository.  
2. Navigate to the project folder.  
3. Install dependencies: `npm install`.  
4. Configure `.env` variables:
   - `PORT`: Backend port.  
   - `MONGODB_URI`: MongoDB connection string.  
   - `JWT_SECRET`: Secret key for tokens.

### **Frontend Setup**
1. Navigate to the `client` folder.  
2. Install dependencies: `npm install`.  
3. Configure `.env` variables:
   - `REACT_APP_API_URL`: Backend API URL.

### **Database Setup**
1. Install MongoDB.  
2. Create a database and update the `MONGODB_URI` in the backend configuration.

---

## 🧑‍💻 **User Guide**
### **User Roles**
- **Interviewee**: Participates in mock interviews.  
- **Admin**: Manages platform functionality.

### **Key Steps**
1. **Sign Up/Login**: Create an account and log in.  
2. **Start Test**: Choose a language and begin the interview.  
3. **Answer Questions**: Respond via voice or text.  
4. **View Reports**: Access performance reports and download certificates.

---

## 🤖 **AI Analysis**
- **Technologies Used**: Flask, Hugging Face Transformers (MPNet Base v2).  
- **Features**:
  - Semantic similarity evaluation.  
  - Topic modeling for dynamic question generation.  
  - AI-powered feedback and scoring.

---

## 📄 **Licenses & Dependencies**
### **Backend**
- `bcryptjs`: Password hashing.  
- `dotenv`: Environment variable management.  
- `mongoose`: MongoDB interaction.  

### **Frontend**
- `react`: UI development.  
- `react-speech-recognition`: Speech input processing.  
- `mdb-react-ui-kit`: UI components.

---

 
