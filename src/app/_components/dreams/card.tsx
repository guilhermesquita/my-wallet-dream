import { Progress } from "../ui/progress";

const CardDream = () => {
  return (
    <section className="w-full border-2 pt-5 px-4 pb-8 border-black rounded space-y-10">
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              {" "}
              <h4 className="text-headline4 font-semibold">
                Notebook i7
              </h4> • <p className="text-body2 text-mld-gray300">5 Meses</p>
            </div>
            <h4 className="text-headline4 font-semibold">Total: R$4.200 </h4>
          </div>
          <Progress value={40} />
        </div>
        <div className="text-body1 font-medium">
          Restam 2 meses para alcançar o seu objetivo! Mas com base nos dados de
          seus gastos você conseguiria em 41 dias.
        </div>
      </div>
      <div>
        <p className="text-body1 text-mld-gray300">Descrição</p>
        <div className="flex justify-between">
          <p className="text-body2">quero um notebook</p>
          <div className="flex gap-2">
            <p>check</p>
            <p>trash</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDream;
