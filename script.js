<script type='text/javascript'>
  // 5 different links
  var links = [
    'https://cutl.io/link1-22-07-25',
    'https://cutl.io/link2-22-07-25',
    'https://cutl.io/link3-22-07-25',
    'https://cutl.io/link4-22-07-25',
    'https://cutl.io/link5-22-07-25'
  ];

  // Pick a random link
  var randomIndex = Math.floor(Math.random() * links.length);
  var selectedLink = links[randomIndex];

  // Redirect to that link
  window.location.href = selectedLink;
</script>
