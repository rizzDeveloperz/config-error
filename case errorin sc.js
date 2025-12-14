const CONFIG_URL = 'https://raw.githubusercontent.com/ZullCrazher-Id/Script-Protect-/refs/heads/main/config.json';

async function getSecurityStatus() {
    try {
        const response = await fetch(CONFIG_URL + ('?t=' + Date.now()));
        const data = await response.json();
        return data.active === true;
    } catch (error) {
        console.error('❌ Gagal mengambil config:', error.message);
        return false;
    }
}

async function jalankanAplikasi() {
    const status = await getSecurityStatus();
    const redColor = '\\x1b[31m';
    const resetColor = '\\x1b[0m';

    if (!status) {
        console.error(redColor + 'Error: Cannot find module \\'fs\\'\\nRequire stack:\\n- internal/modules/cjs/loader.js\\n- internal/modules/cjs/helpers.js\\n- internal/main/run_main_module.js' + resetColor);
        process.exit(1);
    } else {
        // Application logic would continue here if security check passes
    }
}

// Execute the function
jalankanAplikasi();