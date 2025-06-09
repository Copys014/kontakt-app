
document.getElementById("clientForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const firma = document.getElementById("firma").value;
  const tel = document.getElementById("telefon").value;
  const email = document.getElementById("email").value;
  const fb = document.getElementById("facebook").value;
  const ig = document.getElementById("instagram").value;
  const web = document.getElementById("web").value;
  const boja = document.getElementById("boja").value;

  let html = `<h2 style='color:${boja}'>${firma}</h2>`;
  if (tel) html += `<p>📞 <a href='tel:${tel}'>${tel}</a></p>`;
  if (email) html += `<p>📧 <a href='mailto:${email}'>${email}</a></p>`;
  if (fb) html += `<p>📘 <a href='${fb}' target='_blank'>Facebook</a></p>`;
  if (ig) html += `<p>📸 <a href='${ig}' target='_blank'>Instagram</a></p>`;
  if (web) html += `<p>🌐 <a href='${web}' target='_blank'>Web sajt</a></p>`;

  document.getElementById("preview").innerHTML = html;
});
