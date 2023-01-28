import json
import pandas as pd
import numpy as np

df = pd.read_csv("Dataset.csv");

domains= pd.Series(['Fintech','EdTech','Health','Logistics','Enterprise','AgriTech','Entertainment'])

df['Domain'] = np.random.choice(domains,size=len(df))
df["Revenue"] = df["RD_Spend"]+ df["Administration"]+ df["Marketing_Spend"] +df["Profit"]
df["Tax"] = 0.15 * df["Revenue"]
df["Net_Profit"]= df["Profit"] - df["Tax"]
df['Profit_Growth'] = np.random.randint(10, 30, size=len(df))
df['Sales_Growth'] = np.random.randint(10, 30, size=len(df))
df['Market_Cap'] = np.random.randint(1, 10, size=len(df))
df["Enterprise_Value"] = 4 * df ["Market_Cap"]
df['Funding'] = 0.25 *df['Enterprise_Value']

result = df.to_json(orient="records",double_precision=2)
parsed = json.loads(result)
with open('dataset.json','w') as f :
    f.write(json.dumps(parsed,indent=4))

f.close()
