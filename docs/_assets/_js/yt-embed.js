/*
 * Copyright 2024 Sanjay0302
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function () {
  var ytEmbedPlugin = function (hook) {
    hook.afterEach(function (html) {
      // Split the HTML into code blocks and non-code blocks
      var parts = html.split(/(<pre.*?<\/pre>)/g);
      
      // Process only non-code blocks
      for (var i = 0; i < parts.length; i++) {
        if (!parts[i].startsWith('<pre')) {
          parts[i] = parts[i].replace(/@yt\(([^,\)]+)(?:,([^,\)]+))?(?:,([^,\)]+))?(?:,([^,\)]+))?\)(?:\s*<!--\s*\{docsify-ignore\}\s*-->)?/g, function (match, embedId, width, height, align) {
            if (match.includes('<!-- {docsify-ignore} -->')) {
              return match.replace('<!-- {docsify-ignore} -->', '').trim();
            }

            width = width || '100%';
            height = height || '100%';
            align = align || 'center';

            let alignClass = `yt-embed-${align}`;

            return `<div class="yt-embed-container ${alignClass}">
              <div class="yt-embed-wrapper" style="width: ${width}; height: ${height};">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/${embedId}" 
                  frameborder="0" 
                  allow="autoplay; encrypted-media" 
                  allowfullscreen>
                </iframe>
              </div>
            </div>`;
          });
        }
      }
      
      // Join the parts back together
      return parts.join('');
    });
  };

  // Add the plugin to window.$docsify.plugins
  if (!window.$docsify) {
    window.$docsify = {};
  }
  if (!window.$docsify.plugins) {
    window.$docsify.plugins = [];
  }
  window.$docsify.plugins.push(ytEmbedPlugin);
})();