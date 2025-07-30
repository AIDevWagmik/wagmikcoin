<script type="module">
  import {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram
  } from "https://cdn.jsdelivr.net/npm/@solana/web3.js/+esm";

  // ✅ Make connection global so your other script can use it
  window.solanaConnection = new Connection(clusterApiUrl("devnet"), "confirmed");

  // ✅ Expose Solana tools to window
  window.SolanaTools = {
    PublicKey,
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram
  };
</script>
