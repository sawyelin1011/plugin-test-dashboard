import { definePlugin } from "@gsmflow/plugin-sdk";
const index = definePlugin({
  id: "test-dashboard",
  name: "Test Dashboard",
  version: "1.0.0",
  async onLoad(context) {
    console.log("[Test Dashboard] Plugin loaded!", context);
    context.registerHook("admin.sidebar.item", {
      id: "test-dashboard",
      label: "Test Dashboard",
      icon: "BarChart3",
      href: "/admin/plugins/test-dashboard",
      order: 100,
      badge: {
        text: "NEW",
        variant: "success"
      }
    });
    context.registerHook("admin.page", {
      path: "/admin/plugins/test-dashboard",
      component: createDashboardPage()
    });
    context.registerHook("admin.page", {
      path: "/admin/plugins/test-dashboard/settings",
      component: createSettingsPage()
    });
    console.log("[Test Dashboard] Registered sidebar item and pages");
  },
  async onUnload(context) {
    console.log("[Test Dashboard] Plugin unloaded", context);
  },
  async onEnable(context) {
    console.log("[Test Dashboard] Plugin enabled", context);
  },
  async onDisable(context) {
    console.log("[Test Dashboard] Plugin disabled", context);
  }
});
function createDashboardPage() {
  return `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-foreground">Test Dashboard</h1>
          <p class="text-muted-foreground mt-2">
            Interactive plugin demonstration with real-time updates
          </p>
        </div>
        <button 
          onclick="window.location.href='/admin/plugins/test-dashboard/settings'"
          class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Settings
        </button>
      </div>
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-card border border-border rounded-xl p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-muted-foreground uppercase tracking-wide">Total Views</p>
              <p class="text-3xl font-bold text-foreground mt-2" id="stat-views">0</p>
            </div>
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          <p class="text-sm text-success mt-2">+12.5% from last month</p>
        </div>
        
        <div class="bg-card border border-border rounded-xl p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-muted-foreground uppercase tracking-wide">Active Users</p>
              <p class="text-3xl font-bold text-foreground mt-2" id="stat-users">0</p>
            </div>
            <div class="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <p class="text-sm text-success mt-2">+8.2% from last month</p>
        </div>
        
        <div class="bg-card border border-border rounded-xl p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-muted-foreground uppercase tracking-wide">Revenue</p>
              <p class="text-3xl font-bold text-foreground mt-2" id="stat-revenue">$0</p>
            </div>
            <div class="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-sm text-success mt-2">+23.1% from last month</p>
        </div>
        
        <div class="bg-card border border-border rounded-xl p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-muted-foreground uppercase tracking-wide">Conversion</p>
              <p class="text-3xl font-bold text-foreground mt-2" id="stat-conversion">0%</p>
            </div>
            <div class="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <p class="text-sm text-error mt-2">-2.4% from last month</p>
        </div>
      </div>
      
      <!-- Interactive Actions -->
      <div class="bg-card border border-border rounded-xl p-6">
        <h2 class="text-xl font-bold text-foreground mb-4">Interactive Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button 
            onclick="testDashboard.incrementCounter()"
            class="p-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-left"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold">Increment Counter</p>
                <p class="text-sm opacity-90 mt-1">Click count: <span id="click-count">0</span></p>
              </div>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
          
          <button 
            onclick="testDashboard.showNotification()"
            class="p-4 bg-success text-white rounded-lg hover:bg-success/90 transition-colors text-left"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold">Show Notification</p>
                <p class="text-sm opacity-90 mt-1">Display toast message</p>
              </div>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
          </button>
          
          <button 
            onclick="testDashboard.refreshData()"
            class="p-4 bg-warning text-white rounded-lg hover:bg-warning/90 transition-colors text-left"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold">Refresh Data</p>
                <p class="text-sm opacity-90 mt-1">Update statistics</p>
              </div>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      
      <!-- Activity Log -->
      <div class="bg-card border border-border rounded-xl p-6">
        <h2 class="text-xl font-bold text-foreground mb-4">Activity Log</h2>
        <div id="activity-log" class="space-y-3 max-h-64 overflow-y-auto">
          <div class="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
            <div class="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div class="flex-1">
              <p class="text-sm text-foreground">Plugin initialized</p>
              <p class="text-xs text-muted-foreground mt-1">${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Form Example -->
      <div class="bg-card border border-border rounded-xl p-6">
        <h2 class="text-xl font-bold text-foreground mb-4">Configuration Form</h2>
        <form onsubmit="testDashboard.handleSubmit(event)" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Plugin Name
            </label>
            <input 
              type="text" 
              name="pluginName"
              value="Test Dashboard"
              class="w-full px-4 py-2 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Update Interval (seconds)
            </label>
            <input 
              type="number" 
              name="interval"
              value="5"
              min="1"
              max="60"
              class="w-full px-4 py-2 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          
          <div class="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="autoRefresh"
              name="autoRefresh"
              checked
              class="w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-ring"
            />
            <label for="autoRefresh" class="text-sm text-foreground">
              Enable auto-refresh
            </label>
          </div>
          
          <div class="flex gap-3">
            <button 
              type="submit"
              class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Save Changes
            </button>
            <button 
              type="button"
              onclick="testDashboard.resetForm()"
              class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <script>
      // Plugin dashboard functionality
      window.testDashboard = {
        clickCount: 0,
        
        incrementCounter() {
          this.clickCount++;
          document.getElementById('click-count').textContent = this.clickCount;
          this.addActivity('Counter incremented to ' + this.clickCount);
        },
        
        showNotification() {
          this.addActivity('Notification triggered');
          alert('🎉 Test notification from plugin!\\n\\nThis demonstrates plugin interaction capabilities.');
        },
        
        refreshData() {
          const views = Math.floor(Math.random() * 10000) + 1000;
          const users = Math.floor(Math.random() * 500) + 100;
          const revenue = Math.floor(Math.random() * 50000) + 10000;
          const conversion = (Math.random() * 10 + 1).toFixed(1);
          
          document.getElementById('stat-views').textContent = views.toLocaleString();
          document.getElementById('stat-users').textContent = users.toLocaleString();
          document.getElementById('stat-revenue').textContent = '$' + revenue.toLocaleString();
          document.getElementById('stat-conversion').textContent = conversion + '%';
          
          this.addActivity('Statistics refreshed');
        },
        
        handleSubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData);
          console.log('Form submitted:', data);
          this.addActivity('Configuration saved: ' + data.pluginName);
          alert('✅ Settings saved successfully!');
        },
        
        resetForm() {
          document.querySelector('form').reset();
          this.addActivity('Form reset to defaults');
        },
        
        addActivity(message) {
          const log = document.getElementById('activity-log');
          const entry = document.createElement('div');
          entry.className = 'flex items-start gap-3 p-3 bg-muted/50 rounded-lg';
          entry.innerHTML = \`
            <div class="w-2 h-2 bg-success rounded-full mt-2"></div>
            <div class="flex-1">
              <p class="text-sm text-foreground">\${message}</p>
              <p class="text-xs text-muted-foreground mt-1">\${new Date().toLocaleString()}</p>
            </div>
          \`;
          log.insertBefore(entry, log.firstChild);
          
          // Keep only last 10 entries
          while (log.children.length > 10) {
            log.removeChild(log.lastChild);
          }
        }
      };
      
      // Auto-refresh stats every 10 seconds
      setInterval(() => {
        const autoRefresh = document.getElementById('autoRefresh');
        if (autoRefresh && autoRefresh.checked) {
          testDashboard.refreshData();
        }
      }, 10000);
      
      // Initial data load
      testDashboard.refreshData();
    <\/script>
  `;
}
function createSettingsPage() {
  return `
    <div class="space-y-6">
      <div class="flex items-center gap-4">
        <button 
          onclick="window.location.href='/admin/plugins/test-dashboard'"
          class="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 class="text-3xl font-bold text-foreground">Plugin Settings</h1>
          <p class="text-muted-foreground mt-2">Configure test dashboard plugin</p>
        </div>
      </div>
      
      <div class="bg-card border border-border rounded-xl p-6">
        <h2 class="text-xl font-bold text-foreground mb-4">General Settings</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Plugin Status
            </label>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                Active
              </span>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Version
            </label>
            <p class="text-muted-foreground">1.0.0</p>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Last Updated
            </label>
            <p class="text-muted-foreground">${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      
      <div class="bg-card border border-border rounded-xl p-6">
        <h2 class="text-xl font-bold text-foreground mb-4">Advanced Options</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p class="font-medium text-foreground">Debug Mode</p>
              <p class="text-sm text-muted-foreground">Enable detailed logging</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer">
              <div class="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p class="font-medium text-foreground">Analytics</p>
              <p class="text-sm text-muted-foreground">Track usage statistics</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked class="sr-only peer">
              <div class="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
      
      <div class="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
        <h2 class="text-xl font-bold text-destructive mb-4">Danger Zone</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium text-foreground">Uninstall Plugin</p>
              <p class="text-sm text-muted-foreground">Remove this plugin from your system</p>
            </div>
            <button class="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors">
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
export {
  index as default
};
//# sourceMappingURL=index.js.map
