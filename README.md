# Test Dashboard Plugin

Interactive test plugin demonstrating GSM Flow plugin system capabilities.

## Features

- ✅ Custom admin sidebar item with badge
- ✅ Full-featured dashboard page with statistics
- ✅ Interactive UI components (buttons, forms, counters)
- ✅ Real-time activity log
- ✅ Auto-refreshing statistics
- ✅ Settings page
- ✅ Responsive design with theme support

## Installation

### Via Admin Panel

1. Navigate to Admin → Plugins
2. Click "Install Plugin"
3. Enter manifest URL:
   ```
   https://cdn.jsdelivr.net/gh/sawyelin1011/plugin-test-dashboard@master/manifest.json
   ```
4. Click "Install"
5. Enable the plugin

### Manual Build

```bash
cd packages/plugin-test-dashboard
npm install
npm run build
```

## What This Plugin Demonstrates

### 1. Sidebar Integration
- Adds "Test Dashboard" item to admin sidebar
- Includes icon and "NEW" badge
- Custom ordering (order: 100)

### 2. Custom Admin Pages
- Main dashboard at `/admin/plugins/test-dashboard`
- Settings page at `/admin/plugins/test-dashboard/settings`
- Full HTML/CSS/JavaScript support

### 3. Interactive UI Components
- **Stats Cards**: Display key metrics with icons
- **Action Buttons**: Trigger JavaScript functions
- **Activity Log**: Real-time event tracking
- **Configuration Form**: Input fields, checkboxes, submit handling
- **Auto-refresh**: Periodic data updates

### 4. Plugin Lifecycle Hooks
- `onLoad`: Initialize plugin, register hooks
- `onUnload`: Cleanup when plugin removed
- `onEnable`: Activate plugin features
- `onDisable`: Deactivate plugin features

## Usage

After installation and enabling:

1. **Access Dashboard**: Click "Test Dashboard" in admin sidebar
2. **Interact with UI**:
   - Click "Increment Counter" to test state management
   - Click "Show Notification" to test alerts
   - Click "Refresh Data" to update statistics
3. **Configure Settings**: Click "Settings" button or navigate to settings page
4. **Monitor Activity**: Watch the activity log for real-time updates

## Development

### Build
```bash
npm run build
```

### Watch Mode
```bash
npm run dev
```

### Publish to GitHub
```bash
git init
git add .
git commit -m "Initial release"
git remote add origin https://github.com/sawyelin1011/plugin-test-dashboard.git
git push -u origin master
```

## File Structure

```
plugin-test-dashboard/
├── src/
│   ├── index.ts              # Main plugin code
│   └── @types/               # TypeScript definitions
├── dist/                     # Built files (generated)
├── manifest.json             # Plugin manifest
├── package.json              # NPM configuration
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Build config
└── README.md                 # This file
```

## Extension Points

This plugin uses the following extension points:

- `admin.sidebar.item`: Register sidebar navigation
- `admin.page`: Register custom admin pages

## Permissions

Required permissions:
- `ui.render`: Render custom UI components
- `admin.access`: Access admin panel features

## Testing Checklist

- [ ] Plugin installs successfully
- [ ] Sidebar item appears with badge
- [ ] Dashboard page loads correctly
- [ ] Statistics display properly
- [ ] Counter increments on click
- [ ] Notification shows on button click
- [ ] Data refreshes correctly
- [ ] Activity log updates in real-time
- [ ] Form submission works
- [ ] Settings page accessible
- [ ] Theme colors apply correctly
- [ ] Responsive design works on mobile

## Troubleshooting

### Plugin Not Appearing in Sidebar
- Check if plugin is enabled in Admin → Plugins
- Verify `admin.sidebar.item` hook is registered
- Check browser console for errors

### Dashboard Page Not Loading
- Verify manifest URL is accessible
- Check if `entry` URL points to built `dist/index.js`
- Ensure plugin is enabled

### JavaScript Not Working
- Check browser console for errors
- Verify `window.testDashboard` object exists
- Ensure script tags are properly closed

## License

MIT License - See LICENSE file for details

## Support

For issues or questions:
- Check browser console for error messages
- Verify plugin is enabled in admin panel
- Ensure all files are accessible via CDN
