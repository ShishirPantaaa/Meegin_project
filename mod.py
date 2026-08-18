import os, re
from pathlib import Path

dest_dir = Path('src/app/destinations')
template = '''      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0091DA]/5 via-white to-[#004AB8]/5 p-8 sm:p-12 border border-blue-100/50 shadow-xl shadow-blue-900/5">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-emerald-100 blur-3xl opacity-50"></div>
          
          <div className="relative z-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {[
              {
                label: "{L1}",
                value: "{V1}",
                icon: MapPin,
                color: "text-blue-600",
                bg: "bg-blue-100/50",
              },
              {
                label: "{L2}",
                value: "{V2}",
                icon: Compass,
                color: "text-indigo-600",
                bg: "bg-indigo-100/50",
              },
              {
                label: "{L3}",
                value: "{V3}",
                icon: Sparkles,
                color: "text-amber-600",
                bg: "bg-amber-100/50",
              },
              {
                label: "{L4}",
                value: "{V4}",
                icon: Star,
                color: "text-rose-600",
                bg: "bg-rose-100/50",
              },
              {
                label: "{L5}",
                value: "{V5}",
                icon: SunMedium,
                color: "text-emerald-600",
                bg: "bg-emerald-100/50",
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group flex flex-col items-start transition-all duration-300 hover:-translate-y-1">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg} ${stat.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900 leading-tight">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>'''

section_pattern = re.compile(
    r'<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">\s*<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">\s*'
    r'(?:<div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">\s*'
    r'<p className="text-sm font-semibold uppercase tracking-\[0\.22em\] text-\[#004AB8\]">(.*?)</p>\s*'
    r'<p className="mt-4 text-2xl font-semibold text-slate-900">(.*?)</p>\s*</div>\s*){5}'
    r'</div>\s*</section>',
    re.DOTALL
)

item_pattern = re.compile(
    r'<div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">\s*'
    r'<p className="text-sm font-semibold uppercase tracking-\[0\.22em\] text-\[#004AB8\]">(.*?)</p>\s*'
    r'<p className="mt-4 text-2xl font-semibold text-slate-900">(.*?)</p>\s*</div>',
    re.DOTALL
)

import_pattern = re.compile(
    r'(import\s+\{)(.*?)(\}\s+from\s+[\'"]lucide-react[\'"])',
    re.DOTALL
)

count = 0
for page_file in dest_dir.rglob('page.tsx'):
    if page_file.parent.name in ['pokhara', 'mustang', 'lumbini', 'palpa', '[slug]']: continue
    
    content = page_file.read_text(encoding='utf-8')
    match = section_pattern.search(content)
    if match:
        items = item_pattern.findall(match.group(0))
        if len(items) == 5:
            # We want to be careful with quotes in text
            v3 = items[2][1].split(',')[0].split('&')[0].strip() # Shorten known for
            if len(v3) > 30: v3 = v3[:27] + '...'
            v4 = items[3][1].split(',')[0].split('&')[0].strip() # Shorten ideal for
            if len(v4) > 30: v4 = v4[:27] + '...'
            
            new_sec = template.replace('{L1}', items[0][0].strip()).replace('{V1}', items[0][1].strip()) \
                              .replace('{L2}', items[1][0].strip()).replace('{V2}', items[1][1].strip()) \
                              .replace('{L3}', items[2][0].strip()).replace('{V3}', v3) \
                              .replace('{L4}', items[3][0].strip()).replace('{V4}', v4) \
                              .replace('{L5}', items[4][0].strip()).replace('{V5}', items[4][1].strip())
            
            content = content[:match.start()] + new_sec + content[match.end():]
            
            def add_imports(m):
                imps = set(i.strip() for i in m.group(2).split(',') if i.strip())
                imps.update(['MapPin', 'Compass', 'Sparkles', 'Star', 'SunMedium'])
                return m.group(1) + '\n  ' + ',\n  '.join(sorted(imps)) + '\n' + m.group(3)
            
            content = import_pattern.sub(add_imports, content)
            
            page_file.write_text(content, encoding='utf-8')
            print(f'Modified: {page_file}')
            count += 1
print(f'Done modifying {count} files.')
