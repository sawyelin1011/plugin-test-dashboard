# Testing the Test Dashboard Plugin

## Quick Start

### 1. Push to GitHub

```bash
cd packages/plugin-test-dashboard

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Add test dashboard plugin v1.0.0"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/sawyelin1011/plugin-test-dashboard.git

# Push to master
git push -u origin master
```

### 2. Install via Admin Panel

1. Start your GSM Flow development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:5173/admin/plugins`

3. Click "Install Plugin" button

4. Enter manifest URL:
   ```
   https://cdn.jsdelivr.net/gh/sawyelin1011/plugin-test-dashboard@master/manifest.json
   ```

5. Click "Install" and wait for success message

6. Enable the plugin by toggling the switch

### 3. Access the Dashboard

1. Look for "Test Dashboard" in the admin sidebar (with "NEW" badge)
2. Click on it to open the dashboard
3. You should see:
   - 4 statistics cards (Views, Users, Revenue, Conversion)
   - 3 interactive action buttons
   - Activity log showing events
   - Configuration form

## Testing Features

### Interactive Actions

**Increment Counter:**
- Click the "Increment Counter" button
- Watch the click count increase
- Check activity log for new entry

**Show Notification:**
- Click "Show Notification" button
- Alert dialog should appear
- Activity log should update

**Refresh Data:**
- Click "Refresh Data" button
- All statistics should update with random values
- Activity log should show refresh event

### Auto-Refresh

- Statistics automatically refresh every 10 seconds
- Can be disabled via "Enable auto-refresh" checkbox in form
- Activity log shows each auto-refresh

### Configuration Form

1. Modify the "Plugin Name" field
2. Change "Update Interval" value
3. Toggle "Enable auto-refresh" checkbox
4. Click "Save Changes"
5. Alert should confirm save
6. Activity log should show configuration saved

### Settings Page

1. Click "Settings" button in top-right
2. Navigate to settings page
3. View plugin status, version, last updated
4. Toggle advanced options (Debug Mode, Analytics)
5. Click back arrow to return to dashboard

## Expected Behavior

### On Plugin Load
- Console log: `[Test Dashboard] Plugin loaded!`
- Console log: `[Test Dashboard] Registered sidebar item and pages`
- Sidebar item appears with "NEW" badge

### On Dashboard Access
- Page renders with all components
- Statistics show random initial values
- Activity log has "Plugin initialized" entry
- Auto-refresh starts (if enabled)

### On Interaction
- Buttons respond immediately
- Activity log updates in real-time
- Form submissions show success alerts
- No console errors

## Troubleshooting

### Plugin Not Installing

**Error: "Failed to fetch manifest"**
- Wait 2-3 minutes for jsdelivr CDN to cache files
- Try GitHub raw URL instead:
  ```
  https://raw.githubusercontent.com/sawyelin1011/plugin-test-dashboard/master/manifest.json
  ```

**Error: "Invalid manifest: missing required fields"**
- Check manifest.json has `name`, `version`, `entry` fields
- Verify `entry` URL is accessible

### Sidebar Item Not Appearing

1. Check plugin is enabled in Admin → Plugins
2. Refresh the page (Ctrl+R or Cmd+R)
3. Check browser console for errors
4. Verify plugin loaded: Look for console logs

### Dashboard Page Not Loading

1. Check browser console for errors
2. Verify entry URL is accessible:
   ```
   https://cdn.jsdelivr.net/gh/sawyelin1011/plugin-test-dashboard@master/dist/index.js
   ```
3. Check if `dist/index.js` exists in GitHub repo
4. Wait for CDN cache (2-3 minutes after push)

### JavaScript Not Working

1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Verify `window.testDashboard` exists:
   ```javascript
   console.log(window.testDashboard);
   ```
4. Check if script tags are properly closed in HTML

### Styling Issues

1. Verify theme CSS variables are loaded
2. Check if Tailwind classes are available
3. Test in different themes (if supported)
4. Check responsive design on mobile

## Development Workflow

### Local Testing

1. Make changes to `src/index.ts`
2. Build: `npm run build`
3. Push to GitHub: `git push`
4. Wait 2-3 minutes for CDN cache
5. Reinstall plugin or refresh page

### Watch Mode

```bash
npm run dev
```

This watches for changes and rebuilds automatically. You still need to push to GitHub and wait for CDN cache.

### Quick Iteration

For faster testing during development:

1. Build plugin: `npm run build`
2. Copy `dist/index.js` content
3. Paste into browser console
4. Test functionality immediately

## Success Criteria

✅ Plugin installs without errors
✅ Sidebar item appears with badge
✅ Dashboard page loads and renders
✅ All 4 statistics cards display
✅ Counter increments on click
✅ Notification shows on button click
✅ Data refreshes correctly
✅ Activity log updates in real-time
✅ Form submission works
✅ Settings page accessible
✅ No console errors
✅ Responsive on mobile devices

## Next Steps

After successful testing:

1. **Customize**: Modify the dashboard to your needs
2. **Add Features**: Implement real API calls
3. **Integrate**: Connect to actual data sources
4. **Extend**: Add more pages and functionality
5. **Share**: Publish to npm or GitHub Packages

## Support

If you encounter issues:

1. Check browser console for detailed errors
2. Verify all files are pushed to GitHub
3. Wait for CDN cache (2-3 minutes)
4. Try clearing browser cache
5. Test in incognito/private mode
