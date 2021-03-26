import json
import re
import os

def build_file(base_path='assets/Ann/'):
    # group files
    grouped = {}
    for x in os.listdir(base_path):
        prefix = x[0:11]
        grouped.setdefault(prefix, [])
        grouped[prefix].append(x)
        
    # Generate DM
    data_model = []
    # data_model = {}
    for key in grouped: 
        paths = grouped[key]
        base, eyes, mouth = '', [], []
        for p in sorted(paths):
            match = re.match('([0-9a-z]+_){2}?[a-z0-9]+\.png', p)
            if match: 
                base = p
            match = re.match('([0-9a-z]+_){3}?e\d+\.png', p)
            if match: 
                eyes.append(base_path+p)
            match = re.match('([0-9a-z]+_){3}?m\d+\.png', p)
            if match: 
                mouth.append(base_path+p)
        if base:
            outfitnum = ''.join(re.match('[0-9a-z]+_(\d\d)\d_(\d\d).png', base).groups())
            if outfitnum[0] == '0': outfitnum = '00'+outfitnum[2:]
            posenum = ''.join(re.match('[0-9a-z]+_\d(\d\d)_\d\d.png', base).groups())
            dm = {
                'outfitname' : '',
                'outfitnum' : outfitnum,
                'posename' : '',
                'posenum' : posenum,
                'base' : base_path+base,
                'eyes' : eyes,
                'eyespos' : 0,
                'mouth' : mouth,
                'mouthpos' : 0
            }
            data_model.append(dm)
            # data_model.setdefault(outfitnum, [])
            # data_model[outfitnum].append(dm)
    open(base_path[:-1]+"data.json", 'w').write(json.dumps(data_model))

def base_subfolder(base_path='assets/Ann'):
    # Makes a base sub folder
    for f in os.listdir('.'):
        m = re.match('([0-9a-z]+_){2}?[a-z0-9]+\.png', f)
        if m:
            # !cp {f} bases/{f}
            pass
            
if __name__ == '__main__':
    build_file()