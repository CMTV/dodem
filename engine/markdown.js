const mdIt =    require('markdown-it')(
{
    html: true,
    subscript: false,
    superscript: false
});

mdIt.use(require('markdown-it-attrs'), {
    leftDelimiter: '{:'
});

// Spoilers
mdIt.use(require('markdown-it-container'), 'spoiler', {
    validate: function(params) {
        return params.trim().match(/^spoiler\s+(.*)$/);
    },
    
    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
        
        if (tokens[idx].nesting === 1) {
            // opening tag
            return '<details><summary><div class="header-inner">' + m[1] + '</div><div class="toggle-button"><i class="fas fa-eye"></i><i class="fas fa-eye-slash"></i></div></summary><div class="body">\n';
        
        } else {
            // closing tag
            return '</div></details>\n';
        }
    }
});

//

module.exports = mdIt;