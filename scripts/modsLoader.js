data.forEach(mod => {
  tableBody.innerHTML += `
    <tr class="...">
      <td class="...">${mod.nombre}</td>
      <td class="...">${mod.descripcion}</td>
      <td class="...">
        <a href="${mod.video}" class="..." target="_blank">Ver Video</a>
      </td>
      <td class="...">
        <a href="${mod.descarga}" class="..." target="_blank">Descargar</a>
      </td>
    </tr>
  `;
});
