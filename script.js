
/* BWM PATHWAY CONNECT - main client script
   Single-file app: welcome -> portal -> courses -> units -> MCQs -> certificates
   Student: Brian Waweru Mwaura
*/
const STUDENT_NAME = "Brian Waweru Mwaura";
const PASS_MARK = 70;
let state = loadState();

const courses = [{"id": "shares_marketing", "title": "Shares & Marketing", "category": "Business & Finance", "units": [{"title": "Introduction to Shares and Markets", "notes": "What is a share? Overview of capital markets, types of securities, market participants.", "mcq": [{"q": "A share represents:", "options": ["A loan", "Part ownership", "A bond", "A grant"], "a": 1}], "written": ["Explain in 150 words why companies issue shares."]}, {"title": "Stock Exchange Basics", "notes": "How exchanges work, market orders, limit orders, indices and brokers.", "mcq": [{"q": "An index measures:", "options": ["Single stock value", "Market performance", "Interest rates", "Currency rates"], "a": 1}], "written": ["Describe the role of a stock exchange."]}, {"title": "Buying and Selling Shares", "notes": "Placing orders, settlement cycles, brokers and online platforms.", "mcq": [{"q": "A market order:", "options": ["Sets a price", "Executes immediately", "Never executes", "Is only for bonds"], "a": 1}], "written": ["Outline steps to place a share trade."]}, {"title": "Investment Strategies", "notes": "Value vs growth, diversification, portfolio construction, long-term investing.", "mcq": [{"q": "Diversification reduces:", "options": ["Returns", "Risk", "Costs", "Taxes"], "a": 1}], "written": ["Describe two investment strategies and when to use them."]}, {"title": "Digital Marketing Essentials", "notes": "Basics of SEO, content marketing, social media for financial content.", "mcq": [{"q": "SEO helps to:", "options": ["Hide content", "Improve visibility", "Increase cost", "Decrease traffic"], "a": 1}], "written": ["Suggest a digital marketing plan for a financial education blog."]}, {"title": "Case Studies & Final Project", "notes": "Apply knowledge: choose a company, analyse shares & market strategy.", "mcq": [{"q": "A dividend indicates:", "options": ["Company profit sharing", "Debt", "Bank loan", "Regulation change"], "a": 0}], "written": ["Final project: Submit a 1000-word analysis of a listed company."]}]}, {"id": "forex", "title": "Currency / Forex Trading", "category": "Business & Finance", "units": [{"title": "Forex Basics", "notes": "Major pairs, pip, spread, leverage and margin.", "mcq": [{"q": "USD/EUR is a:", "options": ["Stock pair", "Currency pair", "Commodity", "Index"], "a": 1}], "written": ["Explain pips and their importance in forex."]}, {"title": "Chart Reading & Indicators", "notes": "Support/resistance, moving averages, RSI and trend analysis.", "mcq": [{"q": "RSI measures:", "options": ["Volume", "Momentum", "Price", "Inflation"], "a": 1}], "written": ["Describe how moving averages are used."]}, {"title": "Risk Management", "notes": "Risk:reward, position sizing, stop-loss and capital preservation.", "mcq": [{"q": "Stop-loss order:", "options": ["Increases position", "Limits loss", "Guarantees profit", "Changes currency"], "a": 1}], "written": ["Create a risk management checklist for a trade."]}, {"title": "Trading Psychology", "notes": "Discipline, emotional control, journaling, losing streaks.", "mcq": [{"q": "Overtrading is often caused by:", "options": ["Discipline", "Emotion", "Strategy", "Taxes"], "a": 1}], "written": ["How can a trader manage emotions?"]}, {"title": "Practice Trades", "notes": "Sim trading platforms, keeping a trade journal.", "mcq": [{"q": "A trading journal helps:", "options": ["Obscure results", "Track performance", "Hide mistakes", "Create taxes"], "a": 1}], "written": ["Submit 5 simulated trades and reflect."]}, {"title": "Final Exam", "notes": "Comprehensive exam of forex trading topics.", "mcq": [{"q": "Leverage increases:", "options": ["Risk", "Income", "Taxes", "Regulation"], "a": 0}], "written": ["Final exam essay: 750 words."]}]}, {"id": "entrepreneurship", "title": "Entrepreneurship & Innovation", "category": "Business & Finance", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Entrepreneurship & Innovation - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Entrepreneurship & Innovation - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Entrepreneurship & Innovation - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Entrepreneurship & Innovation - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Entrepreneurship & Innovation - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Entrepreneurship & Innovation - unit 6."}]}, {"id": "financial_literacy", "title": "Financial Literacy & Accounting", "category": "Business & Finance", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Financial Literacy & Accounting - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Financial Literacy & Accounting - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Financial Literacy & Accounting - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Financial Literacy & Accounting - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Financial Literacy & Accounting - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Financial Literacy & Accounting - unit 6."}]}, {"id": "scripture1", "title": "Scripture Studies I", "category": "Gospel & LDS", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Scripture Studies I - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Scripture Studies I - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Scripture Studies I - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Scripture Studies I - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Scripture Studies I - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Scripture Studies I - unit 6."}]}, {"id": "mission_prep", "title": "Mission Preparation (Preach My Gospel)", "category": "Gospel & LDS", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Mission Preparation (Preach My Gospel) - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Mission Preparation (Preach My Gospel) - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Mission Preparation (Preach My Gospel) - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Mission Preparation (Preach My Gospel) - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Mission Preparation (Preach My Gospel) - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Mission Preparation (Preach My Gospel) - unit 6."}]}, {"id": "creative_basic", "title": "Creative Writing Basics", "category": "Creative", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Creative Writing Basics - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Creative Writing Basics - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Creative Writing Basics - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Creative Writing Basics - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Creative Writing Basics - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Creative Writing Basics - unit 6."}]}, {"id": "novel_play", "title": "Novel & Playwriting", "category": "Creative", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Novel & Playwriting - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Novel & Playwriting - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Novel & Playwriting - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Novel & Playwriting - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Novel & Playwriting - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Novel & Playwriting - unit 6."}]}, {"id": "poetry", "title": "Poetry & Literary Expression", "category": "Creative", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Poetry & Literary Expression - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Poetry & Literary Expression - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Poetry & Literary Expression - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Poetry & Literary Expression - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Poetry & Literary Expression - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Poetry & Literary Expression - unit 6."}]}, {"id": "intro_bio", "title": "Introduction to Biology", "category": "Biology", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Introduction to Biology - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Introduction to Biology - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Introduction to Biology - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Introduction to Biology - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Introduction to Biology - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Introduction to Biology - unit 6."}]}, {"id": "human_anat", "title": "Human Anatomy & Health", "category": "Biology", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Human Anatomy & Health - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Human Anatomy & Health - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Human Anatomy & Health - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Human Anatomy & Health - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Human Anatomy & Health - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Human Anatomy & Health - unit 6."}]}, {"id": "env_sci", "title": "Environmental Science", "category": "Biology", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Environmental Science - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Environmental Science - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Environmental Science - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Environmental Science - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Environmental Science - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Environmental Science - unit 6."}]}, {"id": "computer_basics", "title": "Computer Basics & Internet Skills", "category": "Tech", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Computer Basics & Internet Skills - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Computer Basics & Internet Skills - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Computer Basics & Internet Skills - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Computer Basics & Internet Skills - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Computer Basics & Internet Skills - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Computer Basics & Internet Skills - unit 6."}]}, {"id": "comm_public", "title": "Communication & Public Speaking", "category": "Tech", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Communication & Public Speaking - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Communication & Public Speaking - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Communication & Public Speaking - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Communication & Public Speaking - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Communication & Public Speaking - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Communication & Public Speaking - unit 6."}]}, {"id": "personal_growth", "title": "Personal Growth & Leadership", "category": "Tech", "units": [{"title": "Unit 1", "notes": "Notes placeholder for Personal Growth & Leadership - unit 1."}, {"title": "Unit 2", "notes": "Notes placeholder for Personal Growth & Leadership - unit 2."}, {"title": "Unit 3", "notes": "Notes placeholder for Personal Growth & Leadership - unit 3."}, {"title": "Unit 4", "notes": "Notes placeholder for Personal Growth & Leadership - unit 4."}, {"title": "Unit 5", "notes": "Notes placeholder for Personal Growth & Leadership - unit 5."}, {"title": "Unit 6", "notes": "Notes placeholder for Personal Growth & Leadership - unit 6."}]}];

// Render root UI
const root = document.getElementById('root');
renderWelcome();

function renderWelcome(){
  root.innerHTML = `
  <div class="container">
    <div class="header">
      <div class="brand">
        <div class="logo"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke="gold" stroke-width="1.2"/></svg></div>
        <div><h1>BWM PATHWAY CONNECT</h1><div class="small">Personal Online Study Portal</div></div>
      </div>
      <div class="nav">
        <button class="music-toggle" id="musicBtn">Play music</button>
      </div>
    </div>

    <div class="card" style="margin-top:18px">
      <h2 style="color:var(--bwmgold)">Welcome to BWM PATHWAY CONNECT</h2>
      <p class="small">Student: <strong>${STUDENT_NAME}</strong></p>
      <p>This portal is designed as a personal university-style study system with 6-week semesters, CATs, final exams, and certificates. It is single-user and unlocks courses sequentially.</p>
      <div style="margin-top:12px"><button class="btn" onclick="enterPortal()">Enter Portal</button></div>
    </div>

    <div class="footer">Built for ${STUDENT_NAME} • Dark theme (Green & Gold) • LocalStorage progress</div>
  </div>
  `;
  const musicBtn = document.getElementById('musicBtn');
  musicBtn.onclick = toggleMusic;
}

function enterPortal(){
  // ensure first course unlocked
  if(!state.unlocked) state.unlocked = {};
  if(!state.unlocked[courses[0].id]) { state.unlocked[courses[0].id]=true; saveState(); }
  renderPortal();
}

function renderPortal(){
  root.innerHTML = `
  <div class="container">
    <div class="header">
      <div class="brand">
        <div class="logo"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke="gold" stroke-width="1.2"/></svg></div>
        <div><h1>BWM PATHWAY CONNECT</h1><div class="small">Student: <strong>${STUDENT_NAME}</strong></div></div>
      </div>
      <div class="nav">
        <button class="btn" onclick="renderHome()">Home</button>
        <button class="btn" onclick="renderCourses()">Courses</button>
        <button class="btn" onclick="renderCerts()">Certificates</button>
        <button class="btn" onclick="renderInstructor()">Instructor</button>
        <button class="music-toggle" id="musicBtnTop">Play music</button>
      </div>
    </div>

    <div id="contentArea" style="margin-top:18px"></div>

    <div class="footer">BWM PATHWAY CONNECT • Built with guidance from Alina Talio</div>
  </div>
  `;
  document.getElementById('musicBtnTop').onclick = toggleMusic;
  renderHome();
}

function renderHome(){
  const content = document.getElementById('contentArea');
  content.innerHTML = `
    <div class="card">
      <h2 style="color:var(--bwmgold)">Dashboard</h2>
      <p class="small">Start with <strong>${courses[0].title}</strong>. Courses unlock sequentially after completion.</p>
      <div style="display:flex;gap:12px;margin-top:12px">
        <button class="btn" onclick="renderCourses()">Go to Courses</button>
        <button class="btn" onclick="renderProgress()">View Progress</button>
      </div>
    </div>
  `;
}

function renderCourses(){
  const content = document.getElementById('contentArea');
  content.innerHTML = '<div class="grid"><div><div class="card"><h3>Courses</h3><div class="course-list" id="courseList"></div></div></div><aside class="card"><h4>Quick Tips</h4><p class="small">Complete units, take CATs and exams. Instructor tab allows grading/writing feedback and exporting progress.</p></aside></div>';
  const list = document.getElementById('courseList');
  list.innerHTML = '';
  courses.forEach(c=>{
    const unlocked = state.unlocked && state.unlocked[c.id];
    const completed = state.completed && state.completed[c.id];
    const pct = Math.round(state.progress && state.progress[c.id] || 0);
    const div = document.createElement('div');
    div.className = 'course';
    div.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><strong>${c.title}</strong><div class="small">${c.category}</div></div><div style="text-align:right"><div class="small">${unlocked? (completed? 'Completed':'Unlocked'):'Locked'}</div><div class="small">${pct}%</div></div></div><div style="margin-top:8px"><button class="btn" ${unlocked?'' : 'disabled'} onclick="openCourse('${c.id}')">Open</button> <button class="btn" onclick="showOutline('${c.id}')">Outline</button></div>`;
    list.appendChild(div);
  });
}

function showOutline(id){
  const c = courses.find(x=>x.id===id);
  const content = document.getElementById('contentArea');
  content.innerHTML = `<div class="card"><h3>${c.title} — Outline</h3>` + c.units.map((u,i)=>`<div style="margin-top:8px"><strong>Week ${i+1}:</strong> ${u.title}<div class="small">${u.notes || ''}</div></div>`).join('') + `<div style="margin-top:12px"><button class="btn" onclick="renderCourses()">Back</button> <button class="btn" onclick="openCourse('${id}')">Open Course</button></div></div>`;
}

function openCourse(id){
  const c = courses.find(x=>x.id===id);
  const unitIndex = state.progress[id+'_unit'] || 0;
  renderCourseView(c, unitIndex);
}

function renderCourseView(course, unitIndex){
  const unit = course.units[unitIndex];
  const total = course.units.length;
  const pct = Math.round(state.progress && state.progress[course.id] || 0);
  const content = document.getElementById('contentArea');
  content.innerHTML = `<div class="grid"><div><div class="card"><h3>${course.title}</h3><div class="small">Unit ${unitIndex+1} / ${total} • Progress: ${pct}%</div><hr style="margin:12px 0"/> <h4>${unit.title}</h4><p class="small">${unit.notes || ''}</p><div style="margin-top:12px"><h5>Written task</h5><div class="small">${unit.written && unit.written[0] ? unit.written[0] : 'No written task'}</div><textarea id="written_${course.id}_${unitIndex}" rows="6">${(state.submissions && state.submissions[course.id+'_'+unitIndex]) || ''}</textarea><div style="margin-top:8px"><button class="btn" onclick="saveWritten('${course.id}',${unitIndex})">Save</button> <button class="btn" onclick="markUnitComplete('${course.id}',${unitIndex})">Mark Complete</button></div></div><div style="margin-top:12px"><h5>Quiz</h5><div id="mcq_${course.id}_${unitIndex}"></div><div style="margin-top:8px"><button class="btn" onclick="startMCQ('${course.id}',${unitIndex})">Start Quiz</button></div></div></div></div><aside class="card"><h4>Course outline</h4>` + course.units.map((u,i)=>`<div class="small" style="${i===unitIndex?'color:var(--bwmgold);font-weight:600':''}">${i+1}. ${u.title}</div>`).join('') + `<div style="margin-top:12px"><button class="btn" onclick="renderCourses()">Back</button> <button class="btn" onclick="nextUnit('${course.id}')">Next Unit</button></div></aside></div>`;
  renderMCQArea(course.id, unitIndex);
}

function saveWritten(courseId, unitIndex){
  const el = document.getElementById(`written_${courseId}_${unitIndex}`);
  state.submissions = state.submissions || {};
  state.submissions[courseId+'_'+unitIndex] = el.value;
  saveState();
  alert('Saved. Instructor will grade when required.');
}

function markUnitComplete(courseId, unitIndex){
  const c = courses.find(x=>x.id===courseId);
  const delta = Math.round(100 / c.units.length);
  state.progress = state.progress || {};
  state.progress[courseId] = Math.min(100, (state.progress[courseId]||0) + delta);
  state[courseId+'_unit'] = unitIndex;
  saveState();
  alert('Marked complete (progress updated).');
  renderCourses();
}

function nextUnit(courseId){
  const idx = state.progress[courseId+'_unit'] || 0;
  const c = courses.find(x=>x.id===courseId);
  if(idx+1 < c.units.length){ state.progress[courseId+'_unit'] = idx+1; saveState(); renderCourseView(c, idx+1); }
  else alert('Last unit. Use Instructor to complete the course or attempt final exam.');
}

function renderMCQArea(courseId, unitIndex){
  const c = courses.find(x=>x.id===courseId);
  const u = c.units[unitIndex];
  const area = document.getElementById(`mcq_${courseId}_${unitIndex}`);
  if(!area) return;
  if(!u.mcq || u.mcq.length===0){ area.innerHTML = '<div class="small">No quiz for this unit.</div>'; return; }
  area.innerHTML = u.mcq.map((q,i)=>`<div style="margin-top:6px"><div class="small">Q${i+1}. ${q.q}</div>` + q.options.map((opt,oid)=>`<label class="small"><input type="radio" name="${courseId}_${unitIndex}_q${i}" value="${oid}"> ${opt}</label>`).join('') + `</div>`).join('');
}

function startMCQ(courseId, unitIndex){
  const c = courses.find(x=>x.id===courseId);
  const u = c.units[unitIndex];
  if(!u.mcq || u.mcq.length===0){ alert('No quiz'); return; }
  let correct = 0;
  u.mcq.forEach((q,i)=>{
    const sel = document.querySelector(`input[name='${courseId}_${unitIndex}_q${i}']:checked`);
    if(sel && parseInt(sel.value,10)===q.a) correct++;
  });
  const score = Math.round((correct / u.mcq.length) * 100);
  state.submissions = state.submissions || {};
  state.submissions[courseId+'_mcq_'+unitIndex] = {score, correct, total: u.mcq.length};
  // update progress
  const units = c.units.length;
  state.progress[courseId] = Math.min(100, (state.progress[courseId]||0) + Math.round(score / units));
  saveState();
  alert('Quiz saved — score: '+score+'%');
  renderCourseView(c, unitIndex);
}

function renderCerts(){
  const content = document.getElementById('contentArea');
  content.innerHTML = `<div class="card"><h3>Certificates</h3>` + courses.map(c=>`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px"><div><strong>${c.title}</strong><div class="small">${c.category}</div></div><div>` + (state.completed && state.completed[c.id] ? `<button class="btn" onclick="downloadCert('${c.id}')">Download</button>` : `<button class="btn" onclick="checkAndCompleteCourse('${c.id}')">Attempt Completion</button>`) + `</div></div>`).join('') + `</div>`;
}

function checkAndCompleteCourse(courseId){
  const pct = state.progress && state.progress[courseId] || 0;
  if(pct >= PASS_MARK){
    state.completed = state.completed || {};
    state.completed[courseId] = true;
    // unlock next
    const idx = courses.findIndex(c=>c.id===courseId);
    if(idx+1 < courses.length) state.unlocked[courses[idx+1].id] = true;
    saveState();
    alert('Course completed — certificate available.');
    renderCourses();
  } else {
    alert('Progress '+pct+'%. Need '+PASS_MARK+'% to complete.');
  }
}

async function downloadCert(courseId){
  if(!(state.completed && state.completed[courseId])){ alert('Course not completed'); return; }
  const c = courses.find(x=>x.id===courseId);
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({orientation:'landscape', unit:'mm', format:'a4'});
  doc.setFillColor(6,45,14);
  doc.rect(0,0,297,210,'F');
  doc.setTextColor(212,175,55);
  doc.setFontSize(28);
  doc.text('BWM PATHWAY CONNECT', 148, 40, {align:'center'});
  doc.setFontSize(18);
  doc.setTextColor(255,255,255);
  doc.text('Certificate of Completion', 148, 60, {align:'center'});
  doc.setFontSize(14);
  doc.text(`This certifies that ${STUDENT_NAME}`, 148, 90, {align:'center'});
  doc.setFontSize(12);
  doc.text(`${c.title}`, 148, 105, {align:'center'});
  const date = new Date().toLocaleDateString();
  doc.text(`Completion date: ${date}`, 148, 120, {align:'center'});
  doc.save(`BWM_Certificate_${c.id}.pdf`);
}

// Instructor & Progress
function renderProgress(){
  const content = document.getElementById('contentArea');
  content.innerHTML = `<div class="card"><h3>Progress Overview</h3>` + courses.map(c=>`<div style="margin-top:8px"><div style="display:flex;justify-content:space-between"><div><strong>${c.title}</strong></div><div>${Math.round(state.progress && state.progress[c.id] || 0)}%</div></div><div class="progress" style="margin-top:6px"><div style="width:${Math.round(state.progress && state.progress[c.id] || 0)}%"></div></div></div>`).join('') + `</div>`;
}

function renderInstructor(){
  const content = document.getElementById('contentArea');
  content.innerHTML = `<div class="card"><h3>Instructor Tools</h3>
    <div style="margin-top:8px"><button class="btn" onclick="exportState()">Export State</button> <button class="btn" onclick="importStatePrompt()">Import State</button></div>
    <div style="margin-top:8px"><select id="forceCourse">${courses.map(c=>`<option value="${c.id}">${c.title}</option>`).join('')}</select> <button class="btn" onclick="forceComplete(document.getElementById('forceCourse').value)">Force Complete</button></div>
    <div style="margin-top:12px"><button class="btn" onclick="resetAll()">Reset All</button></div>
    </div>`;
}

// State helpers
function loadState(){
  try{
    const raw = localStorage.getItem('bwm_state_v2');
    if(raw) return JSON.parse(raw);
  }catch(e){}
  const init = {student:STUDENT_NAME,progress:{},submissions:{},completed:{},unlocked:{}};
  init.unlocked[courses[0].id] = true;
  localStorage.setItem('bwm_state_v2', JSON.stringify(init));
  return init;
}
function saveState(){ localStorage.setItem('bwm_state_v2', JSON.stringify(state)); }

// export/import
function exportState(){
  const txt = JSON.stringify(state, null, 2);
  const blob = new Blob([txt], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'bwm_state_backup.json'; a.click(); URL.revokeObjectURL(url);
}
function importStatePrompt(){
  const inp = document.createElement('input'); inp.type='file'; inp.accept='.json'; inp.onchange = e=>{ const f=e.target.files[0]; const r=new FileReader(); r.onload = ev=>{ try{ state=JSON.parse(ev.target.result); saveState(); alert('Imported'); renderPortal(); }catch(err){ alert('Invalid JSON'); } }; r.readAsText(f); }; inp.click();
}
function forceComplete(id){ state.completed[id]=true; const idx=courses.findIndex(c=>c.id===id); if(idx+1<courses.length) state.unlocked[courses[idx+1].id]=true; saveState(); alert('Marked complete'); renderPortal();}
function resetAll(){ if(confirm('Reset all?')){ localStorage.removeItem('bwm_state_v2'); state=loadState(); renderPortal(); } }

// Utilities
function pad(n){ return n<10? '0'+n: ''+n; }

// Music (simple)
let audio;
function toggleMusic(){
  if(!audio){ audio = new Audio(); audio.src = 'assets/ambient.mp3'; audio.loop=true; }
  if(audio.paused) { audio.play().catch(()=>alert('Play blocked — tap to allow.')); document.querySelectorAll('.music-toggle').forEach(b=>b.innerText='Pause music'); }
  else { audio.pause(); document.querySelectorAll('.music-toggle').forEach(b=>b.innerText='Play music'); }
}
