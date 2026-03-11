**Phimwaree Thannirandorn**

Email: [pim2544varee@gmail.com](mailto:pim2544varee@gmail.com) | GitHub: [github.com/phimwa958](https://github.com/phimwa958) | LinkedIn: [linkedin.com/in/phimwaree-thannirandorn-a402b2325](https://www.linkedin.com/in/phimwaree-thannirandorn-a402b2325/)

---

# สรุปประวัติ (Summary)

นักพัฒนาซอฟต์แวร์จบใหม่ที่มีความอยากรู้อยากเห็นและมีความมุ่งมั่นในการสร้างแอปพลิเคชันที่มีประโยชน์ต่อผู้ใช้ เชี่ยวชาญด้านการออกแบบสถาปัตยกรรมระบบแบบ Full-Stack การผสานระบบ AI/LLM และงานด้าน Data Engineering พร้อมนำทักษะเทคโนโลยีสมัยใหม่ไปใช้ในการทำงานร่วมกับทีมวิศวกรรมซอฟต์แวร์

---

# ประสบการณ์และผลงาน (Experience & Projects)

## โครงการระหว่างการฝึกงาน (Internship Projects)

### Chrome Extension OCR และ Firebase Backend

พัฒนา Chrome Extension ที่สามารถจับภาพจากผู้ใช้และส่งไปประมวลผลเพื่อดึงข้อความด้วย Large Language Model (LLM) แทนการใช้ OCR แบบดั้งเดิม
ออกแบบ Backend แบบรวมศูนย์ด้วย Firebase Functions เพื่อจัดการกระบวนการประมวลผล LLM อย่างปลอดภัย

* พัฒนาระบบยืนยันตัวตนของผู้ใช้
* สร้างระบบ Rate Limiting เพื่อป้องกันการใช้งานเกินขอบเขต
* จัดการวงจรชีวิตของ API Key อย่างปลอดภัยผ่าน Firebase Secret Manager

**เทคโนโลยีที่ใช้:**
JavaScript (Vanilla), Firebase Functions (Node.js), Firebase Admin, Axios, JWT, Mocha & Chai, Chrome Extension API

---

### ระบบตรวจสอบ API และแจ้งเตือน (API Monitoring & Alert System)

ออกแบบและพัฒนาแพลตฟอร์มสำหรับตรวจสอบสถานะ API ที่สามารถติดตาม

* เวลาในการตอบสนองของ Endpoint
* HTTP Status Code
* ข้อผิดพลาดของระบบ

ใช้ FastAPI ร่วมกับ Background Scheduler เพื่อเฝ้าตรวจสอบหลาย API พร้อมกันแบบ Asynchronous และบันทึกข้อมูลลง Supabase (PostgreSQL)

ระบบสามารถแจ้งเตือนทีมพัฒนาได้ทันทีผ่าน LINE และ Google Chat เมื่อพบความผิดปกติ พร้อมแดชบอร์ดแบบเรียลไทม์สำหรับแสดงข้อมูลสุขภาพของ API

**เทคโนโลยีที่ใช้:**
FastAPI (Python), React, Vite, Supabase (PostgreSQL), Docker, LINE Notify API, Google Chat API, Tailwind CSS

---

### การปรับปรุงระบบจัดการข้อมูลสต็อก (Stock Data Management Optimization)

ปรับโครงสร้างและเพิ่มประสิทธิภาพระบบประมวลผลข้อมูลสต็อกเดิมที่พัฒนาด้วย Google Apps Script

* เพิ่มระบบตรวจสอบข้อมูลซ้ำก่อนการประมวลผล
* ปรับกระบวนการอัปเดตข้อมูลจากแบบทีละแถวเป็น Batch Write ในครั้งเดียว
* ลดจำนวนการเรียกเครือข่ายและเพิ่มความเร็วของระบบอย่างมีนัยสำคัญ

**เทคโนโลยีที่ใช้:**
Google Apps Script, JavaScript (ES6), Google Spreadsheet API

---

## การฝึกงานในมหาวิทยาลัย (University Internship)

### การบำรุงรักษาเว็บแอปพลิเคชัน (Web Application Maintenance)

ทำงานร่วมกับทีมพัฒนาในระบบ PHP 8 เพื่อปรับปรุงประสบการณ์การใช้งานของระบบ

* ปรับปรุงอินเทอร์เฟซให้รองรับโปรแกรม Screen Reader
* พัฒนาระบบ Pagination เพื่อจัดการและแสดงข้อมูลขนาดใหญ่บนฝั่ง Frontend อย่างมีประสิทธิภาพ

**เทคโนโลยีที่ใช้:**
PHP 8, HTML/CSS, Web Accessibility (a11y)

---

# โครงการจบการศึกษาและโครงการส่วนตัว (Graduation & Personal Projects)

### แพลตฟอร์มรีวิวและระบบแนะนำสถานที่ (Dynamic Review & Recommendation Platform) — โครงการจบการศึกษา

พัฒนาเว็บแอปพลิเคชันด้วย Django สำหรับรีวิวสถานที่ เช่น ที่พัก ร้านอาหาร และแหล่งท่องเที่ยว
พร้อมระบบแนะนำแบบ Hybrid ที่ปรับน้ำหนักแบบไดนามิก

ระบบรวมโมเดลหลายประเภท ได้แก่

* Popularity-Based Recommendation
* Content-Based Recommendation (ใช้ PyThaiNLP และ Word2Vec)
* User-Based Collaborative Filtering

ระบบสามารถปรับคำแนะนำตามพฤติกรรมของผู้ใช้แบบเรียลไทม์ พร้อมแดชบอร์ดวิเคราะห์ข้อมูลสำหรับผู้ดูแลระบบ

**เทคโนโลยีที่ใช้:**
Django, Django REST Framework, Celery, Redis, MySQL, Docker, Pandas, NumPy, Scikit-learn, Gensim, PyThaiNLP, Bootstrap, Tailwind CSS, Chart.js

---

### แพลตฟอร์มดูดวงไพ่ทาโรต์ (MERN-Stack Tarot Reading Platform)

พัฒนาเว็บแอปพลิเคชันแบบ Full-Stack ด้วย MERN Stack
มีระบบยืนยันตัวตนด้วย JWT และหน้าดูดวงส่วนตัวสำหรับผู้ใช้

* รองรับการเปิดไพ่ 1 ใบ และ 3 ใบ
* ใช้ RESTful API สำหรับจัดการข้อมูลไพ่และผู้ใช้

**เทคโนโลยีที่ใช้:**
React, Node.js, Express.js, MongoDB, Mongoose, JWT, Axios, React Router

---

### แพลตฟอร์มบล็อกด้วย Django (Django Blog Platform)

พัฒนาแพลตฟอร์มบล็อกที่มีระบบจัดการเนื้อหาแบบครบถ้วน

* สร้าง แก้ไข และเผยแพร่บทความ
* ระบบ Draft และ Published
* ระบบหมวดหมู่
* ระบบคอมเมนต์แบบลำดับชั้น
* ระบบกดถูกใจ

ทุกฟังก์ชันสามารถใช้งานผ่าน REST API ที่พัฒนาด้วย Django REST Framework

**เทคโนโลยีที่ใช้:**
Django, Django REST Framework, Pillow, SQLite

---

# ทักษะ (Skills)

## Backend Development & Architecture

Node.js, Express.js, Python (FastAPI, Django), PHP 8, RESTful APIs, System Design, Microservices, Firebase (Functions, Firestore, Admin, Secret Manager)

## Frontend Development & UI/UX

HTML5, CSS3, JavaScript (ES6+, DOM Manipulation), React.js (Context API, React Router), Vite, Tailwind CSS, Bootstrap, Responsive Design, Web Accessibility (a11y), Chrome Extensions (Manifest V3), Axios, Recharts, Chart.js

## Database Management & Cloud Storage

Relational Databases (MySQL, PostgreSQL / Supabase, SQLite), NoSQL Databases (MongoDB / Mongoose, Firestore), Object Storage (Firebase Storage, Supabase Storage)

## Data Science & AI Integration

LLM Integration & Prompt Engineering, Natural Language Processing (PyThaiNLP, Word2Vec, Gensim), Data Analysis (Pandas, NumPy, Scikit-learn), Recommendation Systems (Hybrid filtering), PyTorch, Pillow

## Testing & Quality Assurance

Automated unit and integration testing with Pytest, Mocha & Chai, Postman, curl

## DevOps & Tools

Git, GitHub, CI/CD pipelines, Vercel, Docker, Containerization, Celery, Redis, Google Apps Script, Google Spreadsheet API, Virtual Environments (venv), Jira, VS Code, Gemini CLI
