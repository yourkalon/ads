(function() {
  // 🔹 Random redirect links with target (_self = current tab, _blank = new tab)
  const links = [
    { url: "https://cutl.io/link20-21-10-25", target: "_self" },
    { url: "https://cutl.io/link05-21-10-25", target: "_blank" },
    { url: "https://cutl.io/linkb8-21-10-25", target: "_self" },
    { url: "https://cutl.io/link28-25-10-25", target: "_blank" },
    { url: "https://cutl.io/link28-21-10-25", target: "_self" }
  ];

  // 🔹 Pick a random link
  const selected = links[Math.floor(Math.random() * links.length)];

  // 🔹 Redirect based on target
  window.open(selected.url, selected.target);
})();
